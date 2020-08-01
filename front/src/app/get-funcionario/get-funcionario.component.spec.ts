import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetFuncionarioComponent } from './get-funcionario.component';

describe('GetFuncionarioComponent', () => {
  let component: GetFuncionarioComponent;
  let fixture: ComponentFixture<GetFuncionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetFuncionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
