// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![generate_grad])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

#[tauri::command]
fn generate_grad(r: u8, g: u8, b: u8, a: u8) {
  println!("{} {} {} {}", r,g,b,a);
}