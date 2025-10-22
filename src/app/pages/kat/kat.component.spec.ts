import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KatComponent } from './kat.component';

describe('KatComponent', () => {
  let component: KatComponent;
  let fixture: ComponentFixture<KatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
