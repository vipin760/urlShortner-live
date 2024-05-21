import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UrlService } from 'src/app/service/url.service';

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.css']
})
export class ShortUrlComponent {
  urlForm!: FormGroup;
  newUrl!: string
  shortId!: string;
  isSubmitted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private urlService: UrlService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.shortId = this.activateRoute.snapshot.paramMap.get('id') ?? ''
  }

  ngOnInit(): void {
    this.urlForm = this.fb.group({
      url: ['', Validators.compose([Validators.required, Validators.minLength(7), Validators.pattern(/^https?:\/\/\S+$/)])]
    })
    if (this.shortId) {
      this.urlService.GetUrl(this.shortId).subscribe((data) => {
        window.location.href = data.data
      })
    }
  }
  get urlFormControl() {
    return this.urlForm.controls
  }

  submit() {
    this.isSubmitted = true;
    if (this.urlForm.invalid) return;
    this.urlService.AddUrl(this.urlForm.value).subscribe((data) => {
      this.newUrl = `https://url-shortener-2-frontend.vercel.app/${data.data.shortUrl}`
    })

  }

  copyUrlToClipboard() {
    const el = document.createElement('textarea');
    el.value = this.newUrl;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('URL copied to clipboard!');
  }

}
