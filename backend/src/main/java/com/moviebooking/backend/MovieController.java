package com.moviebooking.backend;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class MovieController {

  @Autowired
  private MovieRepository movieRepository;

  //loadmovies
  @GetMapping("/loadmovies")
  public String createMovie() {
    List<Movie> movies = new ArrayList<>();

    Movie movie1 = new Movie();
    movie1.setId(1);
    movie1.setImage(
      "https://www.cinemark.com/media/76000284/medium-avatar-the-way-of-water-poster.jpg"
    );
    movie1.setDescription(
      "Set more than a decade after the events of the first film, “Avatar The Way of Water” begins to tell the story of the Sully family (Jake, Neytiri and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive and the tragedies they endure."
    );
    movie1.setTitle("Avatar2");

    Movie movie6 = new Movie();
    movie6.setId(6);
    movie6.setImage(
      "https://www.cinemark.com/media/75998311/ticket_to_paradise_poster_large.jpg"
    );
    movie6.setDescription(
      "A man and his ex-wife race to Bali, Indonesia, to stop their teenage daughter from getting married."
    );
    movie6.setTitle("Spirited");

    Movie movie3 = new Movie();
    movie3.setId(3);
    movie3.setImage(
      "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/219625/tgmdomonlinedigitalkeyartt-cruisestandingjetv10.jpg"
    );
    movie3.setDescription(
      "After more than thirty years of service as one of the Navy’s top aviators, Pete “Maverick” Mitchell (Tom Cruise) is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him. When he finds himself training a detachment"
    );
    movie3.setTitle("Top Gun Maverick");

    Movie movie4 = new Movie();
    movie4.setId(4);
    movie4.setImage(
      "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/228129/TM_1Sheet_Payoff_27x40_wTYPE.jpg"
    );
    movie4.setDescription(
      "Set more than a decade after the events of the first film, “Avatar The Way of Water” begins to tell the story of the Sully family (Jake, Neytiri and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive and the tragedies they endure."
    );
    movie4.setTitle("Top Gun");

    Movie movie5 = new Movie();
    movie5.setId(5);
    movie5.setImage(
      "https://www.cinemark.com/media/76001073/large-spirited-updated-poster.jpg"
    );
    movie5.setDescription(
      "A musical version of Charles Dickens' story of a miserly misanthrope who's taken on a magical journey."
    );
    movie5.setTitle("Spirited");

    Movie movie2 = new Movie();
    movie2.setId(2);
    movie2.setImage(
      "https://www.cinemark.com/media/75998951/lg_bpwf_final.jpg"
    );
    movie2.setDescription(
      "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom."
    );
    movie2.setTitle("Black Panther: Wakanda Forever");

    movieRepository.save(movie1);
    movieRepository.save(movie2);
    movieRepository.save(movie3);
    movieRepository.save(movie4);
    movieRepository.save(movie5);
    movieRepository.save(movie6);

    return "Movies added to database sucessfully";
  }

  @GetMapping("/addmovies")
  public void addMovies() {
    createMovie();
  }

  @RequestMapping(method = RequestMethod.POST, path = "/movies")
  public ResponseEntity addMovie(@RequestBody Movie movie) {
    try {
      movieRepository.save(movie);
      return new ResponseEntity("Created Successfully", HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity(
        String.format("%s", e.getMessage()),
        HttpStatus.BAD_REQUEST
      );
    }
  }

  @RequestMapping(method = RequestMethod.PATCH, path = "/movies")
  public ResponseEntity updateMovie(@RequestBody Movie movie) {
    try {
      movieRepository.save(movie);
      return new ResponseEntity("Created Successfully", HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity(
        String.format("%s", e.getMessage()),
        HttpStatus.BAD_REQUEST
      );
    }
  }

  @RequestMapping(method = RequestMethod.DELETE, path = "/deleteMovie/{id}")
  public ResponseEntity deleteMovie(@PathVariable int id) {
    try {
      movieRepository.deleteById(id);
      return new ResponseEntity("Created Successfully", HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity(
        String.format("%s", e.getMessage()),
        HttpStatus.BAD_REQUEST
      );
    }
  }

  @GetMapping("/movies")
  public List<Movie> getMovies() {
    List<Movie> moviesList = new ArrayList<>();
    movieRepository.findAll().forEach(m -> moviesList.add(m));
    return moviesList;
  }
}
