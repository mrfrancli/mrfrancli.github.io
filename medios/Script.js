function Movie_OnMove(X,Y,MouseButton){StackTrace="Al Mover";mouseX = X;mouseY = Y;if (moviendo_foto11) {foto11.X = mouseX;foto11.Y = mouseY;area11.X = mouseX;area11.Y = mouseY;}if (moviendo_foto12) {foto12.X = mouseX;foto12.Y = mouseY;area12.X = mouseX;area12.Y = mouseY;}if (moviendo_foto13) {foto13.X = mouseX;foto13.Y = mouseY;area13.X = mouseX;area13.Y = mouseY;}if (moviendo_foto14) {foto14.X = mouseX;foto14.Y = mouseY;area14.X = mouseX;area14.Y = mouseY;}if (moviendo_foto15) {foto15.X = mouseX;foto15.Y = mouseY;area15.X = mouseX;area15.Y = mouseY;}}function Movie_OnKeyPress(Key){StackTrace="Al Pulsar Tecla";if((Key==39) & (poderandar==0)) { if (fotos1 == 5) {continuar1.Visible = true;cartelcontinuar1.Visible = true;cartas.Visible = false;cartel.Visible = false;}Right.Visible = true; Solo.Visible = false; Left.Visible = false; Right.X = Right.X+10;if (( Right.X > 800) & (pantalla == 0)) {Right.X =0;GotoAndPlay(120);}if (( Right.X > 800) & (pantalla == 1)) {Right.X =0;GotoAndPlay(120);}if (( Right.X > 800) & (pantalla == 1)) {Right.X =0;GotoAndPlay(211);}if ((Right.X > 800) & (pantalla == 2)) {Right.X =0;GotoAndPlay(212);}if (( Right.X > 800) & (pantalla < 4)) {Resume();Right.X =0;}if (( Right.X > 800) & (pantalla == 4)) {Right.X =800;}if (( Right.X > 800) & (pantalla == 4)) {Resume();}Left.X = Right.X; Solo.X = Right.X; ImageSequencePlay("Right");}if((Key==37) & (poderandar==0)) { if (fotos1 == 5) {continuar1.Visible = true;cartelcontinuar1.Visible = true;cartas.Visible = false;cartel.Visible = false;}Right.Visible = false; Solo.Visible = false; Left.Visible = true; Left.X = Left.X -10; if ((Left.X < 0) & (pantalla==0)) {Left.X = 0; }if ((Left.X < 0) & (pantalla==1)) {Left.X = 0; }if ((Left.X < 0) & (pantalla==2)) {GotoAndPlay(119);Left.X = 800; }if ((Left.X < 0) & (pantalla==3)) {GotoAndPlay(211);Left.X = 800; }if ((Left.X < 0) & (pantalla==4)) {GotoAndPlay(212);Left.X = 800; }Right.X = Left.X; Solo.X = Left.X; ImageSequencePlay("Left");}}function Movie_OnKeyRelease(Key){StackTrace="Al Liberar Tecla";ImageSequenceStop("Right");ImageSequenceStop("Left");ImageSequencePlay("Solo");Right.Visible = false; Solo.Visible = true; Left.Visible = false; }function Frame__1_0(ID){StackTrace="Escena 2 Fotograma 0";SoundPlay("sonido fondo",true);}function Frame__1_1(ID){StackTrace="Escena 2 Fotograma 1";SceneNext();}function Frame__2_0(ID){StackTrace="Escena 3 Fotograma 0";Pause();}function Frame__2_2(ID){StackTrace="Escena 3 Fotograma 2";GotoSceneNameAndPlay("Escena1",1);}function Frame__3_0(ID){StackTrace="Escena 4 Fotograma 0";GotoAndPlay(4);}function Frame__3_1(ID){StackTrace="Escena 4 Fotograma 1";Pause();}function Frame__3_2(ID){StackTrace="Escena 4 Fotograma 2";Pause();}function Frame__3_3(ID){StackTrace="Escena 4 Fotograma 3";Pause();}function Frame__3_4(ID){StackTrace="Escena 4 Fotograma 4";Pause();}function Frame__3_5(ID){StackTrace="Escena 4 Fotograma 5";GotoAndPlay(1);}function Frame__4_0(ID){StackTrace="Escena 5 Fotograma 0";Pause();}function Frame__5_0(ID){StackTrace="Escena 6 Fotograma 0";SoundPlay("piano1",false);}function Frame__5_1(ID){StackTrace="Escena 6 Fotograma 1";SoundPlay("piano2",false);}function Frame__5_2(ID){StackTrace="Escena 6 Fotograma 2";SoundPlay("piano3",false);}function Frame__5_3(ID){StackTrace="Escena 6 Fotograma 3";SoundPlay("sonido fondo",true);}function Frame__5_4(ID){StackTrace="Escena 6 Fotograma 4";GotoSceneNameAndPlay("Level1",0);}function Frame__6_0(ID){StackTrace="Escena 7 Fotograma 0";pantalla = 0;continuar1.Visible = false;cartelcontinuar1.Visible = false;bolsillo.Visible = false;cartas.Visible = false;cartel.Visible = false;foto11.Visible = false;area11.Visible = false;foto12.Visible = false;area12.Visible = false;foto13.Visible = false;area13.Visible = false;foto14.Visible = false;area14.Visible = false;foto15.Visible = false;area15.Visible = false;}function Frame__6_1(ID){StackTrace="Escena 7 Fotograma 1";Pause();pantalla = 1;foto11.Visible = false;area11.Visible = false;}function Frame__6_2(ID){StackTrace="Escena 7 Fotograma 2";pantalla = 2;if (once == 0) {foto11.Visible = true;area11.Visible = true;}}function Frame__6_3(ID){StackTrace="Escena 7 Fotograma 3";poderandar = 1;}function Frame__6_4(ID){StackTrace="Escena 7 Fotograma 4";Pause ();}function Frame__6_5(ID){StackTrace="Escena 7 Fotograma 5";Pause ();}function Frame__6_6(ID){StackTrace="Escena 7 Fotograma 6";poderandar = 0;}function Frame__6_7(ID){StackTrace="Escena 7 Fotograma 7";Pause ();poderandar = 1;}function Frame__6_8(ID){StackTrace="Escena 7 Fotograma 8";Pause ();}function Frame__6_9(ID){StackTrace="Escena 7 Fotograma 9";poderandar = 0;}function Frame__6_10(ID){StackTrace="Escena 7 Fotograma 10";bolsillo.Visible = true;}function Frame__6_11(ID){StackTrace="Escena 7 Fotograma 11";Pause();pantalla = 2;if (once == 0) {foto11.Visible = true;area11.Visible = true;}foto12.Visible = false;area12.Visible = false;foto13.Visible = false;area13.Visible = false;}function Frame__6_12(ID){StackTrace="Escena 7 Fotograma 12";Pause ();pantalla = 3;foto11.Visible = false;area11.Visible = false;if (doce == 0) {foto12.Visible = true;area12.Visible = true;}if (trece == 0) {foto13.Visible = true;area13.Visible = true;}foto14.Visible = false;area14.Visible = false;foto15.Visible = false;area15.Visible = false;}function Frame__6_13(ID){StackTrace="Escena 7 Fotograma 13";Pause ();pantalla = 4;foto12.Visible = false;area12.Visible = false;foto13.Visible = false;area13.Visible = false;if (catorce == 0) {foto14.Visible = true;area14.Visible = true;}if (quince == 0) {foto15.Visible = true;area15.Visible = true;}}function Frame__7_0(ID){StackTrace="Escena 8 Fotograma 0";Pause();}function Frame__7_1(ID){StackTrace="Escena 8 Fotograma 1";Pause();}function Frame__7_2(ID){StackTrace="Escena 8 Fotograma 2";Pause();}function Frame__7_3(ID){StackTrace="Escena 8 Fotograma 3";Pause();}function Frame__7_4(ID){StackTrace="Escena 8 Fotograma 4";Pause();}function Frame__7_5(ID){StackTrace="Escena 8 Fotograma 5";Pause();}function Frame__7_6(ID){StackTrace="Escena 8 Fotograma 6";Pause();}function Frame__7_7(ID){StackTrace="Escena 8 Fotograma 7";creditos = 1;GotoSceneNameAndPlay("Creditos",0);}function Frame__8_0(ID){StackTrace="Escena 9 Fotograma 0";if (creditos == 0) {blanco.Visible = false;}}function Frame__8_1(ID){StackTrace="Escena 9 Fotograma 1";if (fotos1 <0) {blanco.Visible = true;}}function Saltarintroduccion_OnClick(){StackTrace="Saltar introduccion.Al Hacer Clic";SceneNext();}function ajustesvolumne_OnClick(){StackTrace="ajustesvolumne.Al Hacer Clic";GotoSceneNameAndPlay("Volumen",0);SoundPlay("boton1",false);}function Quieneres_OnClick(){StackTrace="¿Quien eres.Al Hacer Clic";Resume();SoundPlay("boton1",false);SoundStop("sonido fondo");}function Galeria_OnClick(){StackTrace="Galeria.Al Hacer Clic";GotoSceneNameAndPlay("Galeria",1);SoundPlay("boton1",false);SoundPause("sonido fondo");}function Creditos_OnClick(){StackTrace="Creditos.Al Hacer Clic";GotoSceneNameAndPlay("Creditos",0);SoundPlay("boton1",false);SoundPause("sonido fondo");}function Atras_OnClick(){StackTrace="Atras.Al Hacer Clic";GotoAndPlay(GetFrame()-1);SoundPlay("boton1",false);}function Siguiente_OnClick(){StackTrace="Siguiente.Al Hacer Clic";Resume();SoundPlay("boton1",false);}function volveralmenu_OnClick(){StackTrace="volveralmenu.Al Hacer Clic";GotoSceneNameAndPlay("Menu",56);SoundPlay("boton1",false);SoundResume("sonido fondo");}function volveralmenu_OnClick(){StackTrace="volveralmenu.Al Hacer Clic";GotoSceneNameAndPlay("Menu",56);SoundPlay("boton1",false);SoundResume("sonido fondo");}function InputSlider1_OnChange(Value){StackTrace="InputSlider1.Al Cambiar";var volumen = 50;volumen = SliderGet ("musica");SoundSetVolume("piano1", volumen);SoundSetVolume("piano2", volumen);SoundSetVolume("piano3", volumen);}function InputSlider2_OnChange(Value){StackTrace="InputSlider2.Al Cambiar";var volumen = 50;volumen = SliderGet ("ambiente");SoundSetVolume("sonido fondo", volumen);}function InputSlider3_OnChange(Value){StackTrace="InputSlider3.Al Cambiar";var volumen = 50;volumen = SliderGet ("sonidos");SoundSetVolume("boton1", volumen);}function area11_OnClick(){StackTrace="area11.Al Hacer Clic";moviendo_foto11 = true;}function area11_OnRelease(){StackTrace="area11.Al Liberar";moviendo_foto11 = false;if (collideBoxes(foto11, bolsillo)) {foto11.Visible = false;foto11.X = 1000;fotos1 = fotos1 + 1;once = 1;cartel.Visible = true;cartas.Visible = true;TextBoxSet("cartas", fotos1 + "/ 5 trozos de foto coleccionados");}}function area12_OnClick(){StackTrace="area12.Al Hacer Clic";moviendo_foto12 = true;}function area12_OnRelease(){StackTrace="area12.Al Liberar";moviendo_foto12 = false;if (collideBoxes(foto12, bolsillo)) {foto12.Visible = false;foto12.X = 1000;fotos1 = fotos1 + 1;doce = 1;cartel.Visible = true;cartas.Visible = true;TextBoxSet("cartas", fotos1+ "/ 5 trozos de foto coleccionados");}}function area13_OnClick(){StackTrace="area13.Al Hacer Clic";moviendo_foto13 = true;}function area13_OnRelease(){StackTrace="area13.Al Liberar";moviendo_foto13 = false;if (collideBoxes(foto13, bolsillo)) {foto13.Visible = false;foto13.X = 1000;fotos1 = fotos1 + 1;trece = 1;cartel.Visible = true;cartas.Visible = true;TextBoxSet("cartas", fotos1 + "/ 5 trozos de foto coleccionados");}}function area14_OnClick(){StackTrace="area14.Al Hacer Clic";moviendo_foto14 = true;}function area14_OnRelease(){StackTrace="area14.Al Liberar";moviendo_foto14 = false;if (collideBoxes(foto14, bolsillo)) {foto14.Visible = false;foto14.X = 1000;fotos1 = fotos1 + 1;catorce = 1;cartel.Visible = true;cartas.Visible = true;TextBoxSet("cartas", fotos1 + "/ 5 trozos de foto coleccionados");}}function area15_OnClick(){StackTrace="area15.Al Hacer Clic";moviendo_foto15 = true;}function area15_OnRelease(){StackTrace="area15.Al Liberar";moviendo_foto15 = false;if (collideBoxes(foto15, bolsillo)) {foto15.Visible = false;foto15. X = 1000;fotos1 = fotos1 + 1;quince = 1;cartel.Visible = true;cartas.Visible = true;TextBoxSet("cartas", fotos1 + "/ 5 trozos de foto coleccionados");}}function textoscontinuar_OnClick(){StackTrace="textoscontinuar.Al Hacer Clic";Resume ();}function continuar_OnClick(){StackTrace="continuar.Al Hacer Clic";GotoSceneNameAndPlay("Continue",0);}function textoscontinuar_OnClick(){StackTrace="textoscontinuar.Al Hacer Clic";Resume ();}function continuardos_OnClick(){StackTrace="continuardos.Al Hacer Clic";Resume();}function volveralmenu_OnClick(){StackTrace="volveralmenu.Al Hacer Clic";GotoSceneNameAndPlay("Menu",56);SoundPlay("boton1",false);SoundResume("sonido fondo");}StackTrace="General";var pantalla = 0;var poderandar = 0;var fotos1 = 0;var creditos = 0;var mouseX;var mouseY;var moviendo_foto11 = false;var moviendo_foto12 = false;var moviendo_foto13 = false;var moviendo_foto14 = false;var moviendo_foto15 = false;var once = 0;var doce = 0;var trece = 0;var catorce = 0;var quince = 0;