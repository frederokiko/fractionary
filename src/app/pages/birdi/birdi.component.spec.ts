import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdiComponent } from './birdi.component';

describe('BirdiComponent', () => {
  let component: BirdiComponent;
  let fixture: ComponentFixture<BirdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BirdiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
