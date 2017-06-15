import {Component, OnInit, Input, Output, EventEmitter, HostBinding, ViewChild} from "@angular/core";
import {Searchbar} from "ionic-angular";
import {Keyboard} from "@ionic-native/keyboard";

@Component({
  selector: 'search-group',
  templateUrl: './searchgroup.component.template.html',
  host: {'class': 'search-group'}
})
export class SearchGroup implements OnInit {

  @HostBinding('class.search-group--noresults') _noResults: boolean;

  @Input() title: string;
  @Input() placeholder: string;

  @Input()
  public set noResults(val: boolean){
    this._noResults = val;
  }

  @Output() onSearchGroupSubmit: EventEmitter<string> = new EventEmitter;

  @ViewChild(Searchbar) searchBar: Searchbar;

  constructor(private keyboard: Keyboard) {}

  ngOnInit(): void {}

  public onChange(){
    if(this._noResults){
      this._noResults = false;
    }
  }

  private searchGroupSubmit(event, searchBarValue: string) {
    event.preventDefault();

    this.onSearchGroupSubmit.emit(searchBarValue);
  }
}
