class Api::CardsController < ApplicationController
  def create
    @card = Card.new(card_params)
    if @card.save
      render :json => @card
    else
      render :json => @card.errors, :status => :unprocessable_entity
    end
  end

  def show
    @card = Card.find(params[:id])
    render :show
  end

  def destroy
    @card = Card.find(params[:id])
    @card.destroy!
    render :json => @card
  end

  def update
    @card = Card.find(params[:id])
    if @card.update(card_params)
      render :json => @card
    else
      render :json => @card.errors, :status => :unprocessable_entity
    end
  end

  protected
  def card_params
    params.require(:card).permit(:title, :list_id, :ord, :description)
  end
end
