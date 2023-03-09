import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import {Overlay, OverlayRef} from "@angular/cdk/overlay";
import {debounceTime, fromEvent, takeUntil} from "rxjs";
import {DestroyService} from "@services/destroy.service";
import {TemplatePortal} from "@angular/cdk/portal";

@Directive({
  selector: '[rggPopover]'
})
export class PopoverDirective implements OnInit, OnDestroy {

  @Input() popoverTrigger!: TemplateRef<object>

  @Input('data') values: any;

  private overlayRef!: OverlayRef;

  @HostListener('mouseover') onMouseOver() {
    this.attachOverlay();
  }

  constructor(
    private elementRef: ElementRef,
    private overlay: Overlay,
    private destroy$: DestroyService,
    private vcr: ViewContainerRef,
  ) {
  }

  ngOnInit(): void {
    this.createOverlay();
  }

  private createOverlay() {

    const scrollStrategy = this.overlay.scrollStrategies.block();

    const positionStrategy = this.overlay.position().flexibleConnectedTo(
      this.elementRef).withPositions([{
      originX: "end",
      originY: "center",
      overlayX: "start",
      overlayY: "bottom"
    }, {
      originX: "end",
      originY: "center",
      overlayX: "start",
      overlayY: "top"
    }]);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy,
      hasBackdrop: true,
      backdropClass: ""
    });

    fromEvent(document, 'mouseover')
      .pipe(debounceTime(200), takeUntil(this.destroy$))
      .subscribe(event => {
        const target = event.target as HTMLElement;
        if (!this.overlayRef.overlayElement.contains(target)
          && (target !== (this.elementRef.nativeElement) && !this.elementRef.nativeElement.contains(target))) {
          this.detachOverlay();
        }
      })
  }

  private attachOverlay() {
    if (!this.overlayRef.hasAttached()) {
      const periodSelectorPortal = new TemplatePortal(
        this.popoverTrigger,
        this.vcr
      );
      this.overlayRef.attach(periodSelectorPortal);
    }
  }

  private detachOverlay() {
    if (this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
  }

  ngOnDestroy(): void {
    this.detachOverlay();
  }

}
