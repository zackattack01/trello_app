class User < ActiveRecord::Base
  validates :username, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true}
  validates :username, uniqueness: true

  after_initialize :ensure_session_token

  has_many :boards

  attr_reader :password

  def self.find_by_credentials(user_params)
    user = User.find_by_username(user_params[:username])
    user && user.is_password?(user_params[:password]) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest) == password
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end