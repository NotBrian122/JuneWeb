import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCountries } from './list-countries';

describe('ListCountries', () => {
  let component: ListCountries;
  let fixture: ComponentFixture<ListCountries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCountries],
    }).compileComponents();

    fixture = TestBed.createComponent(ListCountries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
