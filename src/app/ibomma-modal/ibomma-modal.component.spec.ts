import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbommaModalComponent } from './ibomma-modal.component';
import { MatDialogModule } from '@angular/material/dialog';

describe('IbommaModalComponent', () => {
  let component: IbommaModalComponent;
  let fixture: ComponentFixture<IbommaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IbommaModalComponent],
      imports: [MatDialogModule],
    }).compileComponents();

    fixture = TestBed.createComponent(IbommaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
