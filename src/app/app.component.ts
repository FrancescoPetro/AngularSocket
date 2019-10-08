import { Component } from '@angular/core';
import { SocketService } from './socket.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tic Tac Toe';
  result="";
  end = false;

  nextMove = "X";
  move0 = "";
  move1 = "";
  move2 = "";
  move3 = "";
  move4 = "";
  move5 = "";
  move6 = "";
  move7 = "";
  move8 = "";

  messages: string[] = [];

  constructor(public socketService: SocketService) {
    this.socketService.getMessages().subscribe((message: string) => {
      this.messages.push(message);
      // this.updateMove();
      this.move(message, 1);
      console.log("message", message);
    });
  }



  move(num, player) {
    //console.log(this.nextMove);
    //console.log(num);

    if (!this.end) {
      if (player == 0)
        this.socketService.sendMessage(num);

      switch (num) {
        case '0':
          if (this.move0 == "") {
            this.move0 = this.nextMove;
            this.updateMove();
            if (this.win()) {
              this.result=this.move0 + " wins";
              console.log(this.result);
              this.end = true;
            }
            else if (this.tie()) {
              this.result="tie";
              console.log(this.result);
              this.end = true;
            }
          }
          break;

        case '1':
          if (this.move1 == "") {
            this.move1 = this.nextMove;
            this.updateMove();
            if (this.win()) {
              this.result=this.move1 + " wins";
              console.log(this.result);
              this.end = true;
            }
            else if (this.tie()) {
              this.result="tie";
              console.log(this.result);
              this.end = true;
            }
          }
          break;

        case '2':
          if (this.move2 == "") {
            this.move2 = this.nextMove;
            this.updateMove();
            if (this.win()) {
              this.result=this.move2 + " wins";
              console.log(this.result);
              this.end = true;
            }
            else if (this.tie()) {
              this.result="tie";
              console.log(this.result);
              this.end = true;
            }
          }
          break;

        case '3':
          if (this.move3 == "") {
            this.move3 = this.nextMove;
            this.updateMove();
            if (this.win()) {
              this.result=this.move3 + " wins";
              console.log(this.result);
              this.end = true;
            }
            else if (this.tie()) {
              this.result="tie";
              console.log(this.result);
              this.end = true;
            }
          }
          break;

        case '4':
          if (this.move4 == "") {
            this.move4 = this.nextMove;
            this.updateMove();
            if (this.win()) {
              this.result=this.move4 + " wins";
              console.log(this.move4 + " wins");
              this.end = true;
            }
            else if (this.tie()) {
              this.result="tie";
              console.log(this.result);
              this.end = true;
            }
          }
          break;

        case '5':
          if (this.move5 == "") {
            this.move5 = this.nextMove;
            this.updateMove();
            if (this.win()) {
              this.result=this.move5 + " wins";
              console.log(this.move5 + " wins");
              this.end = true;
            }
            else if (this.tie()) {
              this.result="tie";
              console.log(this.result);
              this.end = true;
            }
          }
          break;

        case '6':
          if (this.move6 == "") {
            this.move6 = this.nextMove;
            this.updateMove();
            if (this.win()) {
              this.result=this.move6 + " wins";
              console.log(this.move6 + " wins");
              this.end = true;
            }
            else if (this.tie()) {
              this.result="tie";
              console.log(this.result);
              this.end = true;
            }
          }
          break;

        case '7':
          if (this.move7 == "") {
            this.move7 = this.nextMove;
            this.updateMove();
            if (this.win()) {
              this.result=this.move7 + " wins";
              console.log(this.move7 + " wins");
              this.end = true;
            }
            else if (this.tie()) {
              this.result="tie";
              console.log(this.result);
              this.end = true;
            }
          }
          break;

        case '8':
          if (this.move8 == "") {
            this.move8 = this.nextMove;
            this.updateMove();
            if (this.win()) {
              this.result=this.move8 + " wins";
              console.log(this.move8 + " wins");
              this.end = true;
            }
            else if (this.tie()) {
              this.result="tie";
              console.log(this.result);
              this.end = true;
            }
          }
          break;
      }
    }
  }

  updateMove() {
    if (this.nextMove == 'X')
      this.nextMove = 'O';
    else this.nextMove = 'X';
  }

  tie() {
    if (this.move0 != "" && this.move1 != "" && this.move2 != "" && this.move3 != "" && this.move4 != "" && this.move5 != "" && this.move6 != "" && this.move7 != "" && this.move8 != "")
      return true
    return false
  }

  win() {
    if (
      (this.move0 == this.move1 && this.move0 == this.move2 && this.move0 != "" && this.move1 != "" && this.move2 != "")
      ||
      (this.move3 == this.move4 && this.move3 == this.move5 && this.move3 != "" && this.move4 != "" && this.move5 != "")
      ||
      (this.move6 == this.move7 && this.move6 == this.move8 && this.move6 != "" && this.move7 != "" && this.move8 != "")
      ||
      (this.move0 == this.move3 && this.move0 == this.move6 && this.move0 != "" && this.move3 != "" && this.move6 != "")
      ||
      (this.move1 == this.move4 && this.move1 == this.move7 && this.move1 != "" && this.move4 != "" && this.move7 != "")
      ||
      (this.move2 == this.move5 && this.move2 == this.move8 && this.move5 != "" && this.move8 != "" && this.move2 != "")
      ||
      (this.move2 == this.move4 && this.move2 == this.move6 && this.move4 != "" && this.move6 != "" && this.move2 != "")
      ||
      (this.move0 == this.move4 && this.move0 == this.move8 && this.move0 != "" && this.move4 != "" && this.move8 != "")
    ) return true;
    return false;
  }

}
