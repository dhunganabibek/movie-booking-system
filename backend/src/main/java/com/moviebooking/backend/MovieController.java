package com.moviebooking.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MovieController {

    @Autowired
    private MovieRepository movieRepository;
    public void createMovie(){
        List<Movies> movies = new ArrayList<>();

        Movies movie1 = new Movies();
        movie1.setId(1);
        movie1.setImage("https://www.cinemark.com/media/76000284/medium-avatar-the-way-of-water-poster.jpg");
        movie1.setDescription("Set more than a decade after the events of the first film, “Avatar The Way of Water” begins to tell the story of the Sully family (Jake, Neytiri and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive and the tragedies they endure.");
        movie1.setTitle("Avatar2");

        Movies movie6 = new Movies();
        movie6.setId(6);
        movie6.setImage("https://www.cinemark.com/media/75998311/ticket_to_paradise_poster_large.jpg");
        movie6.setDescription("A man and his ex-wife race to Bali, Indonesia, to stop their teenage daughter from getting married.");
        movie6.setTitle("Spirited");

        Movies movie3 = new Movies();
        movie3.setId(3);
        movie3.setImage("https://www.cinemark.com/media/76000284/medium-avatar-the-way-of-water-poster.jpg");
        movie3.setDescription("Set more than a decade after the events of the first film, “Avatar The Way of Water” begins to tell the story of the Sully family (Jake, Neytiri and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive and the tragedies they endure.");
        movie3.setTitle("Avatar2");

        Movies movie4 = new Movies();
        movie4.setId(4);
        movie4.setImage("https://www.cinemark.com/media/76000284/medium-avatar-the-way-of-water-poster.jpg");
        movie4.setDescription("Set more than a decade after the events of the first film, “Avatar The Way of Water” begins to tell the story of the Sully family (Jake, Neytiri and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive and the tragedies they endure.");
        movie4.setTitle("Avatar2");

        Movies movie5 = new Movies();
        movie5.setId(5);
        movie5.setImage("https://www.cinemark.com/media/76001073/large-spirited-updated-poster.jpg");
        movie5.setDescription("A musical version of Charles Dickens' story of a miserly misanthrope who's taken on a magical journey.");
        movie5.setTitle("Avatar2");

        Movies movie2 = new Movies();
        movie2.setId(2);
        movie2.setImage("https://www.cinemark.com/media/75998951/lg_bpwf_final.jpg");
        movie2.setDescription("Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom.");
        movie2.setTitle("Black Panther: Wakanda Forever");


        movieRepository.save(movie1);
        movieRepository.save(movie2);
        movieRepository.save(movie3);
        movieRepository.save(movie4);
        movieRepository.save(movie5);
        movieRepository.save(movie6);
    }





    @GetMapping("/movies")
    public String movies(){
        createMovie();
        return "all movies";
    }

}
