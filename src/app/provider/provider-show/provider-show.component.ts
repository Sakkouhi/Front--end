import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../../services/provider.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Provider} from '../../models/provider';
import {Rating} from '../../models/rating';

@Component({
  selector: 'app-provider-show',
  templateUrl: './provider-show.component.html',
  styleUrls: ['./provider-show.component.css']
})
export class ProviderShowComponent implements OnInit {
  private providerId: string;
  public provider: any;

  constructor(
    private providerService: ProviderService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
  ) {
    this.providerId = '';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.providerId = params['id'];
      this
        .providerService
        .getProviderById(this.providerId)
        .subscribe(provider => {
          this.provider = provider;
        }
        );
        
    });
  }
  deleteProvider(){
    this
    .providerService
    .deleteProvider(this.providerId)
    .subscribe(provider => {
      this.router.navigate(['providers/add'])
    });
    

  }

}
