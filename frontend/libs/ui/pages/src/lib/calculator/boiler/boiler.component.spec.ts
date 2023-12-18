import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoilerComponent } from './boiler.component';

describe('BoilerComponent', () => {
  let component: BoilerComponent;
  let fixture: ComponentFixture<BoilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoilerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BoilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
