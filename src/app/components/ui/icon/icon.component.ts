import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'tk-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IconComponent {
	@Input() width!: number | string;
	@Input() height!: number | string;
	@Input() item: string = '';


	getPath() {
		const item = this.item;
		this.item = `assets/sprite.svg#${item}`
		return this.item;
	}

}
