import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent implements OnInit {

  constructor(private momentService: MomentService,
              private MomentService: MessagesService,
              private router: Router) { }

  btnText = 'Compartilhar';

  ngOnInit(): void {}

    async createHandler(moment: Moment) {
    const formData = new FormData()

    formData.append('title', moment.title)
    formData.append('description', moment.description)

     if (moment.image) {
      formData.append('image', moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();

    this.MomentService.add(' Momento adicionado com sucesso! ');

    this.router.navigate(['/'])

  }
}