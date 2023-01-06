import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeBuilderComponent } from './life-builder.component';

describe('LifeBuilderComponent', () => {
  let component: LifeBuilderComponent;
  let fixture: ComponentFixture<LifeBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
