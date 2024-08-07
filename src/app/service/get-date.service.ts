import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDateService {

  constructor() { }

  Today() {
    // Crée une instance de Date à partir du timestamp
    const date = new Date(Date.now());

    const options = {
      year: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    };

    // Retourne la date formatée 
    return date.toLocaleString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    });
  }
}
