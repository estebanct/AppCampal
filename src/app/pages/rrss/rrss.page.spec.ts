import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RrssPage } from './rrss.page';

describe('RrssPage', () => {
  let component: RrssPage;
  let fixture: ComponentFixture<RrssPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RrssPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RrssPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
