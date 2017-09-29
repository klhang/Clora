Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :questions, except: [:new, :edit]
    resources :answers, except: [:new, :edit]
    resources :comments, except: [:new, :edit]
    resources :topics, except: [:new, :edit]
    resources :question_topic_links, except: [:new, :edit]
    get "topics/:topic_id/questions", to: "questions#searchByTopic"
    get "search", to: "questions#searchQuestionsByName"
  end

  root "static_pages#root"
end
