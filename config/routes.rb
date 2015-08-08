Rails.application.routes.draw do
  resources :users, only: [:create, :new, :show] 
  resource :session, only: [:create, :new, :destroy]

  namespace :api, :defaults => { :format => :json } do 
    resources :boards, :only => [:create, :destroy, :show, :update, :index]
    resources :lists, :only => [:create, :update, :destroy]
    resources :cards, :only => [:create, :destroy, :update] do 
      resources :items, :only => [:index]
    end
    resources :items, :only => [:create, :update, :destroy]
  end
  root to: "static_pages#index"
end