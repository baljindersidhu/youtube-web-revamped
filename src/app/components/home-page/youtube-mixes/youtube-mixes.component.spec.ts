import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeMixesComponent } from './youtube-mixes.component';

describe('YoutubeMixesComponent', () => {
  let component: YoutubeMixesComponent;
  let fixture: ComponentFixture<YoutubeMixesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeMixesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeMixesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
