import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailArticleMvtStkComponent } from './detail-article-mvt-stk.component';

describe('DetailArticleMvtStkComponent', () => {
  let component: DetailArticleMvtStkComponent;
  let fixture: ComponentFixture<DetailArticleMvtStkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailArticleMvtStkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailArticleMvtStkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
