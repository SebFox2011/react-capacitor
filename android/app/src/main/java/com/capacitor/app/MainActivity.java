package com.capacitor.app;

import com.getcapacitor.BridgeActivity;
import ee.forgr.biometric.NativeBiometric;
import android.os.Bundle;
import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
     public void onCreate(Bundle savedInstanceState) {
        registerPlugin(NativeBiometric.class);
        super.onCreate(savedInstanceState);

     }
}