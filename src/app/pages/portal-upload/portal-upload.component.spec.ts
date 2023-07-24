import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalUploadComponent } from './portal-upload.component';

describe('PortalUploadComponent', () => {
  let component: PortalUploadComponent;
  let fixture: ComponentFixture<PortalUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
