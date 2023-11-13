package com.spotify.musicservice.config;

import java.net.URI;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

import se.michaelthelin.spotify.SpotifyApi;
import se.michaelthelin.spotify.SpotifyHttpManager;

//@Service
@Configuration
public class SpotifyConfiguration {
	
	@Value("${redirect.server.ip}")
	private String customIp;
	
	public SpotifyApi getSpotifyObject() {
		 URI redirectedURL =  SpotifyHttpManager.makeUri(customIp + "/api/get-user-code/");
		 
		 return new SpotifyApi
				 .Builder()
				 .setClientId("your clien id")
				 .setClientSecret("your client secret")
				 .setRedirectUri(redirectedURL)
				 .build();
	}
}
