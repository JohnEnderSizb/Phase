package com.andrew.phase;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;

public class Spash extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getSupportActionBar().hide();
        setContentView(R.layout.activity_spash);


        new Thread(new Runnable() {
            public void run() {

                doSomeWork();

                startActivity(new Intent(Spash.this, MainActivity.class));
                finish();


            }
            //---do some long running work here---
            private void doSomeWork()
            {
                try {
                    //---simulate doing some work---
                    Thread.sleep(1200);
                } catch (InterruptedException e)
                {
                    e.printStackTrace();
                }
            }
        }).start();
    }
}
