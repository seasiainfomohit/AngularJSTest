import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultcomponentComponent } from './resultcomponent.component';

describe('ResultcomponentComponent', () => {
  let component: ResultcomponentComponent;
  let fixture: ComponentFixture<ResultcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
