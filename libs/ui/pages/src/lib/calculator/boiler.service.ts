import { Injectable } from '@angular/core';
import { Boiler, TypedPocketBase } from '@lectoraat-smart-energy/shared';
import PocketBase from 'pocketbase';

@Injectable()
export class BoilerService {
  pb = new PocketBase('http://127.0.0.1:8090') as TypedPocketBase;

  public async getBoilers() {
    const records = await this.pb.collection('boilers').getFullList({
      sort: '-created',
    });
    console.log(records);
  }

  public async storeCalculation(boiler: Boiler) {
    const record = await this.pb.collection('boilers').create(boiler);
    console.log(record);
  }
}
