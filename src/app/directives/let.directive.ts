import {
  Directive,
  Inject,
  Input,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";
import {LetContext} from "@utils/let-context";

@Directive({
  selector: "[ngLet]"
})
export class LetDirective<T> {
  @Input()
  ngLet!: T;

  constructor(
    @Inject(ViewContainerRef) viewContainer: ViewContainerRef,
    @Inject(TemplateRef) templateRef: TemplateRef<LetContext<T>>
  ) {
    viewContainer.createEmbeddedView(templateRef, new LetContext<T>(this));
  }
}
