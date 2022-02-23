import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FuseConfirmationService } from '@fuse/services/confirmation';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../../environments/environment';

@Component({
    selector       : 'profile',
    templateUrl    : './profile.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent
{
    /**
     * Constructor
     */
    configForm: FormGroup;
    configSuccessForm: FormGroup;
    apiURL = environment.apiURL;

    constructor(
        private _httpClient: HttpClient,
        private _formBuilder: FormBuilder,
        private _fuseConfirmationService: FuseConfirmationService        
    )
    {
    }

    ngOnInit(): void {


        // Build the config form
        this.configForm = this._formBuilder.group({
            title: 'Transfer medical records',
            message: 'Are you sure you want to transfer the medical records to user\'s own record?',
            icon: this._formBuilder.group({
                show: true,
                name: 'heroicons_outline:exclamation',
                color: 'warn'
            }),
            actions: this._formBuilder.group({
                confirm: this._formBuilder.group({
                    show: true,
                    label: 'Transfer',
                    color: 'warn'
                }),
                cancel: this._formBuilder.group({
                    show: true,
                    label: 'Cancel'
                })
            }),
            dismissible: false
        });

        // Build the config form
        this.configSuccessForm = this._formBuilder.group({
            title: 'Transfer medical records',
            message: 'Medical records transfered!',
            icon: this._formBuilder.group({
                show: true,
                name: 'heroicons_outline:check',
                color: 'success'
            }),
            actions: this._formBuilder.group({
                confirm: this._formBuilder.group({
                    show: false,
                    label: 'OK',
                    color: 'success'
                }),
                cancel: this._formBuilder.group({
                    show: true,
                    label: 'Close'
                })
            }),
            dismissible: false
        });

    }


    medicalRecords = [
        {
            "ofchain_id": "64515b49-d187-4396-adb1-23aa156319a6",
            "owner": "cfaad35d-07a3-4447-a6c3-d8c3d54fd5df",
            "shared": "",
            "record": {
                "fullUrl": "urn:uuid:9732d5aa-a07e-4574-8215-43805895dd1d",
                "resource": {
                    "resourceType": "Observation",
                    "id": "9732d5aa-a07e-4574-8215-43805895dd1d",
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "laboratory"
                                }
                            ]
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "1975-2",
                                "display": "Bilirubin.total [Mass/volume] in Serum or Plasma"
                            }
                        ],
                        "text": "Bilirubin.total [Mass/volume] in Serum or Plasma"
                    },
                    "subject": {
                        "reference": "urn:uuid:adccf2c3-9dc4-4067-ba23-98982c4875da"
                    },
                    "encounter": {
                        "reference": "urn:uuid:709c6355-d71a-4755-a356-240cb644abca"
                    },
                    "effectiveDateTime": "2012-06-29T13:11:44-04:00",
                    "issued": "2012-06-29T13:11:44.627-04:00",
                    "valueQuantity": {
                        "value": 1.1859129920456349,
                        "unit": "mg/dL",
                        "system": "http://unitsofmeasure.org",
                        "code": "mg/dL"
                    }
                },
                "request": {
                    "method": "POST",
                    "url": "Observation"
                }
            }
        },
        {
            "ofchain_id": "33215b49-d187-4396-adb1-23aa156319a6",
            "owner": "cfaad35d-07a3-4447-a6c3-d8c3d54fd5df",
            "shared": "",
            "record": {
                "fullUrl": "urn:uuid:203a27b2-ff27-4f47-9d43-c8064ec67c0c",
                "resource": {
                    "resourceType": "Observation",
                    "id": "203a27b2-ff27-4f47-9d43-c8064ec67c0c",
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "laboratory"
                                }
                            ]
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "6768-6",
                                "display": "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma"
                            }
                        ],
                        "text": "Alkaline phosphatase [Enzymatic activity/volume] in Serum or Plasma"
                    },
                    "subject": {
                        "reference": "urn:uuid:adccf2c3-9dc4-4067-ba23-98982c4875da"
                    },
                    "encounter": {
                        "reference": "urn:uuid:709c6355-d71a-4755-a356-240cb644abca"
                    },
                    "effectiveDateTime": "2012-06-29T13:11:44-04:00",
                    "issued": "2012-06-29T13:11:44.627-04:00",
                    "valueQuantity": {
                        "value": 105.31170828837505,
                        "unit": "U/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "U/L"
                    }
                },
                "request": {
                    "method": "POST",
                    "url": "Observation"
                }
            }
        },
        {
            "ofchain_id": "44515b49-d187-4396-adb1-23aa156319a6",
            "owner": "cfaad35d-07a3-4447-a6c3-d8c3d54fd5df",
            "shared": "",
            "record": {
                "fullUrl": "urn:uuid:b7ff4c71-6755-468b-b03d-15eeab160a25",
                "resource": {
                    "resourceType": "Observation",
                    "id": "b7ff4c71-6755-468b-b03d-15eeab160a25",
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "laboratory"
                                }
                            ]
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "1742-6",
                                "display": "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma"
                            }
                        ],
                        "text": "Alanine aminotransferase [Enzymatic activity/volume] in Serum or Plasma"
                    },
                    "subject": {
                        "reference": "urn:uuid:adccf2c3-9dc4-4067-ba23-98982c4875da"
                    },
                    "encounter": {
                        "reference": "urn:uuid:709c6355-d71a-4755-a356-240cb644abca"
                    },
                    "effectiveDateTime": "2012-06-29T13:11:44-04:00",
                    "issued": "2012-06-29T13:11:44.627-04:00",
                    "valueQuantity": {
                        "value": 40.73176407643025,
                        "unit": "U/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "U/L"
                    }
                },
                "request": {
                    "method": "POST",
                    "url": "Observation"
                }
            }
        },
        {
            "ofchain_id": "55515b49-d187-4396-adb1-23aa156319a6",
            "owner": "cfaad35d-07a3-4447-a6c3-d8c3d54fd5df",
            "shared": "",
            "record": {
                "fullUrl": "urn:uuid:6c49ccf9-283e-4e5c-ba7f-22c55c342d99",
                "resource": {
                    "resourceType": "Observation",
                    "id": "6c49ccf9-283e-4e5c-ba7f-22c55c342d99",
                    "status": "final",
                    "category": [
                        {
                            "coding": [
                                {
                                    "system": "http://terminology.hl7.org/CodeSystem/observation-category",
                                    "code": "laboratory",
                                    "display": "laboratory"
                                }
                            ]
                        }
                    ],
                    "code": {
                        "coding": [
                            {
                                "system": "http://loinc.org",
                                "code": "1920-8",
                                "display": "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma"
                            }
                        ],
                        "text": "Aspartate aminotransferase [Enzymatic activity/volume] in Serum or Plasma"
                    },
                    "subject": {
                        "reference": "urn:uuid:adccf2c3-9dc4-4067-ba23-98982c4875da"
                    },
                    "encounter": {
                        "reference": "urn:uuid:709c6355-d71a-4755-a356-240cb644abca"
                    },
                    "effectiveDateTime": "2012-06-29T13:11:44-04:00",
                    "issued": "2012-06-29T13:11:44.627-04:00",
                    "valueQuantity": {
                        "value": 29.41411525197141,
                        "unit": "U/L",
                        "system": "http://unitsofmeasure.org",
                        "code": "U/L"
                    }
                },
                "request": {
                    "method": "POST",
                    "url": "Observation"
                }
            }
        }
    ]

    /**
     * Open confirmation dialog
     */
     openConfirmationDialog(): void {
        // Open the dialog and save the reference of it
        const dialogRef = this._fuseConfirmationService.open(this.configForm.value);

        // Subscribe to afterClosed from the dialog reference
        dialogRef.afterClosed().subscribe((result) => {
            if (result === 'cancelled') {

            } else {
                this.transferMedicalRecords()
            }
            console.log(result);

        });
    }


    /**
     * Open confirmation dialog
     */
    successDialog(): void {
        // Open the dialog and save the reference of it
        const dialogRef = this._fuseConfirmationService.open(this.configSuccessForm.value);

        // Subscribe to afterClosed from the dialog reference
        dialogRef.afterClosed().subscribe((result) => {
            console.log(result);

        });
    }


    transferMedicalRecords(): void {

        this._httpClient.post<any>(this.apiURL + '/loadAssets', this.medicalRecords).subscribe({
            next: data => {
                console.log(data)
                this.successDialog()
            },
            error: error => {
                console.error('There was an error!', error);
            }
        })

        console.log(this.medicalRecords)

    }
}
