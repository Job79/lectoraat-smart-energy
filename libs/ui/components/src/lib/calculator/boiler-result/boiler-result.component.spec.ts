import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoilerResultComponent } from './boiler-result.component';

describe('BoilerResultComponent', () => {
  let component: BoilerResultComponent;
  let fixture: ComponentFixture<BoilerResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoilerResultComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BoilerResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
