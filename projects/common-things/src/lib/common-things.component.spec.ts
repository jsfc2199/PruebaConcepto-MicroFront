import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonThingsComponent } from './common-things.component';

describe('CommonThingsComponent', () => {
  let component: CommonThingsComponent;
  let fixture: ComponentFixture<CommonThingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonThingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
