Rails.application.routes.draw do
  get '/users/index'
  get '/' => 'users#index'
  get '/users/welcome' => 'users#welcome'
  get '/users/registration' => 'users#registration'
  root 'users#index'
end
