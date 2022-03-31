import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoCardMinimalComponent } from './todo-card-minimal.component';

describe('TodoCardMinimalComponent', () => {
  let component: TodoCardMinimalComponent;
  let fixture: ComponentFixture<TodoCardMinimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoCardMinimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoCardMinimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
