import { PlaylistController } from "../controller/playlistController";

export class Route{

    public playlistController:PlaylistController = new PlaylistController();

    public routes(app :any): void{

        //Playlist Controller
        app.route('/').get(this.playlistController.home);
        app.route('/addSongToList').post(this.playlistController.addSongToList);

    }

}