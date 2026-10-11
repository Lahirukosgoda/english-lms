function CourseImage({ src, alt, className = "" }) {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-indigo-50 via-blue-50 to-blue-100">
      {src && (
        <img
          src={src}
          alt={alt}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
          className={`absolute inset-0 w-full h-full object-cover ${className}`}
        />
      )}
    </div>
  );
}

export default CourseImage;