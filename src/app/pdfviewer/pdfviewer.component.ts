import { AfterViewInit, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import PSPDFKit from "pspdfkit";

@Component({
	selector: 'app-pdfviewer',
	templateUrl: './pdfviewer.component.html',
	styleUrls: ['./pdfviewer.component.css']
})
export class PdfviewerComponent implements AfterViewInit {
	constructor(private router: Router, private actRoute: ActivatedRoute) {

	}

	pdfLists = [
		{id:1, file:'sample-1.pdf'},
		{id:2, file:'sample-2.pdf'},
		{id:3, file:'sample-1.pdf'},
		{id:4, file:'sample-1.pdf'},
	];

	file:string | undefined;

	ngOnInit() {
		let product_id = this.actRoute.snapshot.params['id'];
		this.file = this.pdfLists[product_id-1].file;
		console.log(this.file);
	}

	ngAfterViewInit() {
		PSPDFKit.load({
			// Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
			baseUrl: location.protocol + "//" + location.host + "/assets/",
			document: "/assets/pdf/"+this.file,
			container: "#pspdfkit-container",
		}).then(instance => {
			// For the sake of this demo, store the PSPDFKit for Web instance
			// on the global object so that you can open the dev tools and
			// play with the PSPDFKit API.
			(window as any).instance = instance;
		});
	}

	backToHome(){
		this.router.navigate(['/']);
	}
}
