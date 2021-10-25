import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { InventoryBrand, InventoryCategory, InventoryPagination, InventoryProduct, InventoryTag, InventoryVendor, patientRecord } from 'app/modules/admin/apps/ecommerce/inventory/inventory.types';

@Component({
    selector       : 'inventory',
    templateUrl    : './inventory.component.html',
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryComponent
{
    /**
     * Constructor
     */
    constructor()
    {
    }
}
