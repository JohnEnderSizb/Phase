package com.andrew.phase;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;

public class MainActivity extends AppCompatActivity {
    WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getSupportActionBar().hide();
        setContentView(R.layout.activity_main);

        webView = (WebView) findViewById(R.id.theWv);

        WebSettings webSetting = webView.getSettings();

        //webSetting.setDomStorageEnabled(true);
        webSetting.setJavaScriptEnabled(true);
        webSetting.setDisplayZoomControls(false);

        webView.loadUrl("file:///android_asset/indexframe.html");

    }
}
