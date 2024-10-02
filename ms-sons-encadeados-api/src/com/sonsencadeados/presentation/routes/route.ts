import { PlaylistController } from "../controller/playlistController";

export class Route{

    private playlistController:PlaylistController = new PlaylistController();
    
    private ROUTE_API : string = "/sonsencadeados/v1";

    public routes(app): void{

        //Playlist Controller
        app.route(this.ROUTE_API+'/').get(this.playlistController.home);
        app.route(this.ROUTE_API+'/addSongs').post(this.playlistController.addSongs);

    }

}