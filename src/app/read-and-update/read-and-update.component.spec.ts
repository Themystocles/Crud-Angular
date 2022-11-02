import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAndUpdateComponent } from './read-and-update.component';

describe('ReadAndUpdateComponent', () => {
  let component: ReadAndUpdateComponent;
  let fixture: ComponentFixture<ReadAndUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadAndUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadAndUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
