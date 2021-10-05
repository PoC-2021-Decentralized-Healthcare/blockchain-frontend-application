import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AppConfig, Scheme, Theme } from 'app/core/config/app.config';
import { FuseConfigService } from '@fuse/services/config';

@Component({
    selector       : 'schemes',
    templateUrl    : './schemes.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'schemes'
})
export class SchemesComponent implements OnInit, OnDestroy
{
    config: AppConfig;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _fuseConfigService: FuseConfigService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {

        // Subscribe to config changes
        this._fuseConfigService.config$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config: AppConfig) => {

                // Store the config
                this.config = config;

            });

    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();        
    }


    /**
     * Set the scheme on the config
     *
     * @param scheme
     */
     setScheme(scheme: Scheme): void
     {
         this._fuseConfigService.config = {scheme};
      }
     

    /**
     * Toggle the scheme on the config
     *
     * 
     */      
      toggleScheme(): void 
      {

        let currentScheme = this.config.scheme;

        let newScheme: Scheme = currentScheme === 'dark' ? 'light' : 'dark';

        this.config.scheme = newScheme;

        this._fuseConfigService.config = {newScheme};

      }
     
}
