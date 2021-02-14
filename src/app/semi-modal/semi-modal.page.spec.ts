import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SemiModalPage } from './semi-modal.page';

describe('SemiModalPage', () => {
  let component: SemiModalPage;
  let fixture: ComponentFixture<SemiModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemiModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SemiModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
