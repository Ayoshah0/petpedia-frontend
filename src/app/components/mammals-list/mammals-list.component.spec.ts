import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MammalsListComponent } from './mammals-list.component';

describe('MammalsListComponent', () => {
  let component: MammalsListComponent;
  let fixture: ComponentFixture<MammalsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MammalsListComponent]
    });
    fixture = TestBed.createComponent(MammalsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
