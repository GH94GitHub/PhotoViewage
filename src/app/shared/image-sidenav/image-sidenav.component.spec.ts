import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSidenavComponent } from './image-sidenav.component';

describe('ImageSidenavComponent', () => {
  let component: ImageSidenavComponent;
  let fixture: ComponentFixture<ImageSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
