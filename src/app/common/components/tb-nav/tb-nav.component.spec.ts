import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbNavComponent } from './tb-nav.component';

describe('TbNavComponent', () => {
  let component: TbNavComponent;
  let fixture: ComponentFixture<TbNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
