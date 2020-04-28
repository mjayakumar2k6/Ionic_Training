import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyNewPagePage } from './my-new-page.page';

describe('MyNewPagePage', () => {
  let component: MyNewPagePage;
  let fixture: ComponentFixture<MyNewPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyNewPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
