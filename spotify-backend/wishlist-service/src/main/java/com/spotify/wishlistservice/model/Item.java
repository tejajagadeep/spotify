package com.spotify.wishlistservice.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document
public class Item {
    @JsonProperty("track")
    private Track track;

    @JsonProperty("album")
    private Album album;

    @JsonProperty("artists")
    private List<Artist> artists;
    // Getters and setters
}