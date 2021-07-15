import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { RecipiesService } from '../recipies.service';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.page.html',
  styleUrls: ['./recipie-detail.page.scss'],
})

export class RecipieDetailPage implements OnInit {

  loadedRecipie: Recipie;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipiesService: RecipiesService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMapObj => {
                        //this recipieId same as app-routing.module' path mentioned.
      if(!paramMapObj.has('recipieId')) {
        //redirect
        this.router.navigate(['/recipies']);
        return;
      }
                                    //this recipieId same as app-routing.module' path mentioned.
      const recipieID = paramMapObj.get('recipieId');
      this.loadedRecipie = this.recipiesService.getRecipie(recipieID);
    });
  }

  onDeleteRecipie() {
    this.alertCtrl.create({
      header: "Alert",
      message: "Do you really want to delete?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipiesService.deleteRecipie(this.loadedRecipie.id);
            this.router.navigate(['/recipies']);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    })
  }

}
