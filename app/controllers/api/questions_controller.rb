class Api::QuestionsController < ApplicationController

  def index
    @questions = Question.all
  end

  def show
    @question = Question.find(params[:id])
  end

  def create
    @question = Question.new(question_params)
    if @question.save
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def update
    @question = Question.find(params[:id])
    if @question.update(question_params)
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def destroy
    @question = Question.find(params[:id])
    if @question.destroy
      render :show
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def searchByTopic
    @topic = Topic.find(params[:topic_id])
    @questions = @topic.questions

    render :index
  end

  def searchQuestionsByName
    @questions = Question.where('lower(title) LIKE lower(?)', "%#{params[:title]}%") || []

    render :index
  end

  private

  def question_params
    params.require(:question).permit(:title, :description, :author_id, topic_ids: [])
  end

end
